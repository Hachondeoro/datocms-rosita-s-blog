import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script type="text/javascript" src="/static/js/jquery.min.js"></script>
          <script type="text/javascript" src="/static/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="/static/js/gsap.min.js"></script>
          <script type="text/javascript" src="/static/js/locomotive-scroll.min.js"></script>
          <script type="text/javascript" src="/static/js/ScrollTrigger.min.js"></script>
          <script type="text/javascript" src="/static/js/kinetic-slider.js"></script>
          <script type="text/javascript" src="/static/js/fancybox.min.js"></script>
          <script type="text/javascript" src="/static/js/odometer.min.js"></script>
          <script type="text/javascript" src="/static/js/swiper.min.js"></script>
          <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
