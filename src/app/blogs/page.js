import Navbar from '@/Components/Navbar/Navbar'
import Blogs from '@/Components/Blogs/Blogs'
import Footer from '@/Components/Footer/Footer'
import CommonHeader from '@/Components/CommonHeader/CommonHeader'

const headdata = {
  t1: 'Our', 
  t2: 'Blogs', 
  para: 'Stay informed with the latest insights, tips, and trends on our blog.'
};

export const metadata = {
  title: "Blogs | AppsoBytes",
  description: "Turning Ideas Into Impactful Apps",
}

const page = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <CommonHeader headdata={headdata} />
        <Blogs />
        <Footer />
    </div>
  )
}

export default page