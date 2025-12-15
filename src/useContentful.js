import { createClient } from "contentful"

const useContentful = () => {

    const client = createClient({
        space: "mp9j0j5s0k9r",
        accessToken: "oJcHM8Gf07_ZUYM6GGBZUR64F7mwKNT_8Zb2s899K_g"
    })

    const getPost = async () => {
        try {
           const entries = await client.getEntries({
                content_type: "post",
                select: "fields"
            })

            const sanitizeEntries = entries.items.map((item) => {
                const currency = item.fields
                
                return {
                    ...item.fields,
                }
            })
            
            return sanitizeEntries
        } catch(error){
            console.log(error)
        }
    }
    return {getPost}
}

export default useContentful