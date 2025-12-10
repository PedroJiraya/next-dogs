

type FotoIdType = {
    params: Promise<{
        id: string
    }>
}

export default async function FotoIdPage({params}:FotoIdType) {
    const {id} = await(params) 

   

  return <div>FotoId:{id}</div>
}
