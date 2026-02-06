import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import sql from '@/lib/db'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function GET() {
  try {
    const session = await verifySession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const persons = await sql`
      SELECT id, person_name, description, images, display_order, created_at
      FROM donated_persons
      ORDER BY display_order DESC, created_at DESC
    `

    return NextResponse.json(persons)
  } catch (error) {
    console.error('Error fetching donated persons:', error)
    return NextResponse.json({ error: 'Failed to fetch donated persons' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await verifySession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const personName = formData.get('person_name') as string
    const description = formData.get('description') as string
    const imageFiles = formData.getAll('images') as File[]

    if (!personName || !description || imageFiles.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads', 'donated-persons')
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true })
    }

    // Save images and collect URLs
    const imageUrls: string[] = []
    for (const file of imageFiles) {
      if (file.size > 0) {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        // Create unique filename
        const timestamp = Date.now()
        const randomStr = Math.random().toString(36).substring(7)
        const extension = file.name.split('.').pop()
        const filename = `${timestamp}-${randomStr}.${extension}`
        const filepath = join(uploadsDir, filename)
        
        await writeFile(filepath, buffer)
        imageUrls.push(`/uploads/donated-persons/${filename}`)
      }
    }

    // Insert into database
    const result = await sql`
      INSERT INTO donated_persons (person_name, description, images, display_order)
      VALUES (${personName}, ${description}, ${imageUrls}, 0)
      RETURNING id, person_name, description, images, display_order, created_at
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating donated person entry:', error)
    return NextResponse.json({ error: 'Failed to create entry' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await verifySession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
    }

    await sql`DELETE FROM donated_persons WHERE id = ${id}`

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting donated person:', error)
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await verifySession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, display_order } = await request.json()

    if (!id || display_order === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await sql`
      UPDATE donated_persons
      SET display_order = ${display_order}
      WHERE id = ${id}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating display order:', error)
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }
}
