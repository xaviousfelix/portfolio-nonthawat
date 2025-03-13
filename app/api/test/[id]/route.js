export async function GET(request, { params }) {
    
    return Response.json({ 
        name: 'Nonthawat',
        id: params.id 

    });
}