import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"

export const revalidate = 0;


const HomePage = async () => {
    const billboard = await getBillboard("afbb72ef-fe5e-458b-8c09-f3b3591e39b2");
    return (
     <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
     </Container>
    )
}

export default HomePage;