// 'use client';
import Dummy from "@/components/Dummy/Dummy";
import Description from "@/components/Description/Description";
import MainMsg from "@/components/MainMsg/MainMsg";
import MainReversed from "@/components/MainMsg/MainReversed";
import SecondMsg from "@/components/SecondMsg/SecondMsg";
import SecondReverse from "@/components/SecondMsg/SecondReverse";
import MessengerApp from "@/components/MessengerApp/MessengerApp";
import './globals.css'
import Header from "./header/Header";
import Navbar from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Services from "@/components/Services/Services";

export default function Home() {
  const section1 = {
    title: 'Life on LINE',
    description: 'More than just a messenger app. LINE is new level of communication, and the very infrastructure of your life'
  }
  const lineNews = {
    title: 'LINE NEWS',
    primaryMsg: 'Keep current with the latest news on LINE.',
    secondaryMsg: 'LINE NEWS is the most popular news content curation service in Asia and aims to deliver valuable content that enrich your everyday life.',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABHElEQVQ4y2P4TwFgGNVMgeZ/QIjKgHLBAJONbjOaNsI2//j78+WPN9///Ljz5dG7Xx+B7FPvrjz/+ebj+4/vP3x4+uzZ1WvX7t679/bd2zdv396+fefGjZsIzbe+PJz9cN39r0+8T+SknK+vuTbJ6kDsiR+Xli9akZ6TU1pRlZSaPm3GzPikFCAqLCktKCr9+fMnVPPT769SLzQuebQp40JL+ZX++LPVToeSDn4+s3vr7ryi4tSMrNT0rM1btsbEJwJNmT5jZkJS6qdPnxB+vvzh5p3PD1/9ePv197fXP95d+3j79a93Xz9//f79+6tXr27dvv3mzZv3799//vz50ePH12/cwBVgpEcVMJDB6D+eqIJK44mq0YxBS80AGdl3fYx8vr4AAAAASUVORK5CYII=',
    image: 'https://www.line.me/static/a0e039d55719e1ba7525b6ca7873defc/bd486/9d88013dbfcb1a3f1268c95b65286a2e.png'
  }
  const lineDoctor = {
    title: 'LINE Doctor',
    primaryMsg: 'Connect with a doctor, right from the LINE app.',
    secondaryMsg: "LINE Doctor is a telemedicine service that lets users book appointments, speak with a doctor over video call, and pay for consultations on the LINE app.Receive medical consultations at home when you don't have time to visit a hospital or want to avoid the crowd.",
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5UlEQVQ4y4VU30vTURT/OiGot/ofsl5FUBhYglAvUZaNPbnWlDmop0LxLe1BAiEQoZ4iSN3mgomky4UTY4SCkIoUPSgLRiVUaoq17fvd/XTOl3Plbmhd+HDur/M5v+49FgBLKWWxJNSKZFwmPCWsEn4StgkfCM8J10mnVvQ8JodlENTwJqGZ5kv4/2Dyq9X6hwuR9/kmHbBwSNqO45QJSlDmPTqz5Q6PIYPUYo90mPcM66zAGkdCzhwBj8fC4bEk/mZtkb0olUqwbVsVi0WVyWQQjUYRi8WQSqVwcHDgest3+K5Ewlb8ZshLEqotFl325eVl1NfXY3Bw0IXX68Xk5CTMO6SjvcwRTjHZJbZQLpf5QM3MzKiuri709vaipaUFdXV1GHg4gAcD/WhsbERDQwN6enrAd8bHxzWpLV6GmPAJL8h99k4FAgHV3d2NZDKJeCyOiZcJxF9EkRiNIzYRRyKRcNHf34/W1ladU0dSluL8vRdCzoeKRCJYWFioeB9fsYMNfKvYy+fzaG9vhy6SeLjDHn4XQtdaOBxGUvJUKBSwuZfHxWwY5+Zu4uPuJn4X/rhnKysraGtr04SQyrsF+VFNODU1dZj2puxteF414cS0F+fnfdgt7rtHa2trxxKumyEzoa5koVhEbv8LLpCHZ+du4NOvz/hTFA9XKzzUfPtM+MwsCuXQfXuVOdzGhqrMYS6X4xxWF2WeCa8JoftsOjo6VF9fHxYXF5GeTeP1m1lkM2/xbj6LWZqn02lks1mMjIzoKjNjSQjvut+FFuv0Dt2PMjY2Bp/Ppzo7OxEMBl0EbgVc6HUoFILf71fDw8OsU2Zd4tii+Rn9U64Yr75s/AR1RJcx9znckswjujnofvZIzHH0DlslqGMA6UIlYR3VXcuqarBD8gT0d7KNR6vL6eicSd5GzZ5Y0Rxl7iNs/iNMPbZ0mKJbo0M2u7ZH1icJQZpPS+vXCdsjkSF5h+RpoznrBm39BRWpYj4w8U0aAAAAAElFTkSuQmCC',
    image: 'https://www.line.me/static/e8a07094a01ab8975a48dca8433b965a/bd486/ffc3e27eae43915c70bb0ebecffd1186.png'
  }
  const linePay = {
    title: 'LINE Pay',
    primaryMsg: 'Easily make payments online/offline with LINE Pay.',
    secondaryMsg: "LINE Pay is an easy, convenient, and safe payment system. Enjoy freely making payments without your wallet.",
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACXUlEQVQ4y61UQWgTQRTdeihaaz0LevWkN8GTUvCiTVYtxkpRexMvevIiBcGriKK9KhXEgyhopVCMByFp0qSJadW02ghtmpC0tDEmbZImTbL7fDPZNIk2awoOvH1/d968+fN3ZhRl3KoQB5VxdVhxqlFilfEKeUWyOYQ2Tu0b8lFCEWaHGEQJMEaFq7CaQP0TOeIYDdXnxuA8WSPrZAPWFqEWjEl8ipE6FGe9kYoWUdE7pZkmv/GRlR+qhjK2tAgrjDH6VlJ8ZOo6yGexy3WefE5CxM0gtA1jnWSZoXS36HvcF2BPz+DLxhKC+WVyHJPZRSIi2ZeLSIh4KhfDh7VZ7J7o49ieWhlqhj16FzvLehmifadporgOs1bUNXR5B6A4zmxv2OG2QaPoXfITDgdu4mTwDlzrIYRo7s8sIFZMI1HKIKttYpnxWjmPTu8Vc0PR3iYncWT6Fk7N3MXAjyH0hx7hBM0Ho69xff4JbiwMY2hpTGo7PJf/bfjqpwcH/NcQyIbxmANtcw/RTfOnqw7cXnyBvZ5+pEpZbGgl8ww73ReRKxdYvzjep4PSPMv3e7ERDEZeIlnK4UF8FL1z92WfWP4+79XmhvsnLskamjVfZh7hQkLGQln9KW1/G1r0dlcvnnFZY6nPrKMfo7+miICMBUb4sz6mZ2FPfaVmGsPUtrNMcpPXGTZubMfpyr5qBrE8AWEitZa6Q9GwsStHr631c1xdZu3oiYuCj9T/vhzsRucmzyJ2YFqvKxkcFobH6zo0Y7adoJJZJRmbIq9tp7Wb/G2bmc0z3KqdGiP6hNdvYgi2Vh8u35EAAAAASUVORK5CYII=',
    image: 'https://www.line.me/static/7021565c70781907870f9511c9e94f90/bd486/a276f0ba4514646db440283731a02819.png'
  }
  const lineMusic = {
    title: 'LINE MUSIC',
    primaryMsg: 'Listen, Watch and Sing along.',
    secondaryMsg: "LINE MUSIC is a music streaming service in Japan with over 100 million songs, both Japanese and foreign. Users can listen to trending songs, watch music videos and enjoy the sing-along feature.",
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADIElEQVQ4y62QXWhTZxjHX3ua9CM9sRNhN17NS8HBLkUZ7Gaw28EcbLZNE9M2ica6DoRt9UIYusGYsIvZjXUbuAvnECd+0ZotbZqkNjGQ9QPbfJxqC6m1rantAvHjtzdv6zw9682gB368z9f//zwc4TQ62UqEnj/G/8WZ71Rs1hMVV32dzWLz9u2SRuM4O4yP1Ksbxzb0dfOFzg0XrL3b5RWvSHHlGkc+iD0XQGTbERk3VTmf6usWndCzMvkPQZzytWekwaQbW8bPzlwXb9z7nEOFXr4rRmh7cB5tSppmOzdoRcNkECvOSWl218/e/CnOLw8TK+WYLi8w92SZZGmaK8tp3p05R/Vdn5o1a4Vj4ihW9Ikg2ngH+/Jf0LM4SOvMTxzIf8lrU5+we+pT3jK+4vXsKWrG/TRYtMIxeoTNqBsNsGO8k7fzZ+me+51LxRTp0gz35KWV7+fFGCLtwTkW3KAT9ekAVvS03JTycNDogedwrfgXZwo3aJ7u5dXRLnoeDnBhKYG441KzZq2oS/mxoqfkpoQbl/EjiVVDxi7ESBPbkl5E/D3Ozt3i4lJS1lpokLNmrahN+DBTl5CGSWkY+5D3Mz0kV6ZxJALrPR+2kXZ654e4sDAizZtxJAOq/kIvaoc7eIkP+3A7WryNXXc+pvv+ZWloqJp+O8CvCwnmy4/VPzxXCCOiLhy3/Zg9RE20HUWsQ6FFvXxfGGT5aYnSszIjj/OIgUOcMH4jV5qnMX6UHwoRLj6U/3CgifqYj389JMIeaaNCXUS6h1t4Z/RrFsorNA4d4eDEt4ytzCL++ICTxmXGVmfV7FAxwzezIVWvj/hUzT645iNsYS8VasPSPdTCm6kzPHryN/tTp/llLk7/4risN7MzEqRvcYynz58RfZRhV7SLbX96qAm38cLDHq4Yhg5jC3kVdonod9GdvcRSeZVk0WBP/DNVq7rlQZPsjp5Yn2tV75r+pYeo7juMGa3Pg7jZhB7yUaXiFmyyblvvV/LKjL3fK3MPVr3QbsjNJqoltpuycb1V5m4VW3vVFo0ZoV11o13bOkTVlVa2kn8AZPjO0BaBi3cAAAAASUVORK5CYII=',
    image: 'https://www.line.me/static/838d59bb9072735ee7d0f048b59b5191/bd486/d23df73ddb8fabe683cd95898f8d4e67.png'
  }
  const servicesList = [
    {
      id:1,
      title: 'Texts, Voice & Video Calls',
      msg: 'You can send one-on-one and group texts, and use international voice and video calls with your friends.',
      image: 'https://www.line.me/static/ffa3514253d556a0d0438ac29a4b7f54/8309f/61a2e214eca5538e29bcbe053fa3cf3c.png'
    },
    {
      id:2,
      title: 'Stickers, Emoji, Themes',
      msg: 'You can share you feelings with stickers or emoji, and wrap your app with colorful themes',
      image: 'https://www.line.me/static/a8de3e6659ebefe88b2a5f9599a44840/8309f/fac06dc14beb741ebe01b40e54ee91db.png'
    },
    {
      id:3,
      title: 'OpenChat',
      msg: 'You can meet new friends with similar interests and share fun news and information.',
      image: 'https://www.line.me/static/ffa3514253d556a0d0438ac29a4b7f54/8309f/61a2e214eca5538e29bcbe053fa3cf3c.png'
    },
    {
      id:4,
      title: 'Hometab',
      msg: 'You can access to various information, services, contents like LINE family services, stickers, etc.',
      image: 'https://www.line.me/static/df3b41c41af445382cf6236328043118/8309f/9ff2eb29dbf8bfa3b2104424f60849e2.png'
    },
    {
      id:5,
      title: 'LINE VOOM',
      msg: 'Explore even more content that you may like in the "For you" tab.',
      image: 'https://www.line.me/static/97907952821c1f60eb45de2385abea09/8309f/6693331c56e037c1ca7b8a78b8360faa.png'
    },
    {
      id:6,
      title: 'Wallet',
      msg: 'Paying or sending money by "LINE Pay", and you can use various LINE financial services.',
      image: 'https://www.line.me/static/32058f3603b803ec0f7eab2a9d9193b8/8309f/13f388ec933929e7c682b7f55f1baee0.png'
    },
  ]


  return (
    
    <>
      <Navbar />
      <Header />
      <main>
        <section id="lifeOnLine">
          <Description data={section1} />
        </section>
        <section id="mainServices">
          <MainMsg data = {lineNews}/>
          <MainReversed data = {lineDoctor}/>
          <SecondMsg data = {linePay}/>
          <SecondReverse data = {lineMusic}/>
        </section>
        <MessengerApp cards = {servicesList}/>
        <Services/>        
      </main>
      <Footer />
    </>
  );
}