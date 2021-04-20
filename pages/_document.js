import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script> */}
          <script type="text/javascript" src="/static/js/jquery.min.js"></script>
          <script type="text/javascript" src="/static/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="/static/js/gsap.min.js"></script>
          <script type="text/javascript" src="/static/js/locomotive-scroll.min.js"></script>
          <script type="text/javascript" src="/static/js/ScrollTrigger.min.js"></script>
          <script type="text/javascript" src="/static/js/kinetic-slider.js"></script>
          <script type="text/javascript" src="/static/js/fancybox.min.js"></script>
          <script type="text/javascript" src="/static/js/odometer.min.js"></script>
          <script type="text/javascript" src="/static/js/swiper.min.js"></script>
          {/* <script type="text/javascript" src="/static/js/scripts.js"></script> */}
          {/* <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
        	<link href="https://fonts.googleapis.com/css?family=Pinyon+Script" rel="stylesheet"></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
