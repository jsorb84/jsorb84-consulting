# Next.JS Snippets

<center><a href='https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets'><img src='/nextjssnippets.png' /></a></center>

## [Download the plugin here](https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets)

# Snippets Reference

## Page initialization snippets

### `nafe` (nextjs arrow function (export at the end))

```
const FileName = () => {
  return <div>CONTENT</div>;
};

export default FileName;

```

### `naf` (nextjs arrow function)

```
export default () => {
  return <div>CONTENT</div>;
};

```

### `nfe` (nextjs normal function (export at the end))

```
function FileName() {
  return <div>CONTENT</div>;
}

export default FileName;

```

### `nf` (nextjs normal function )

```
export default function () {
  return <div>CONTENT</div>;
}

```

## Nextjs api routes

### `napi` (nextjs api route)

### Javascript

```
export default function handler(req, res)  {
    req.statusCode = 200
}

```

### Typescript

```
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    req.statusCode = 200
}

```

## Importing Components

### `nil` (nextjs import link)

```
import Link from "next/link";

```

### `nir` (nextjs import router(default))

```
import Router from "next/router";

```

### `niur` (nextjs import useRouter)

```
import { useRouter } from "next/router";

```

### `nih` (nextjs import Head)

```
import Head from "next/head";

```

## Imported Components Usage

### `nulwhref` (nextjs use link with href)

```
<Link href="path">
  <a>Value</a>
</Link>

```

### `nuur` (nextjs use useRouter)

```
const router = useRouter();

```

### `nuh` (nextjs use Head )

```
<Head>
  <title>Title</title>
</Head>

```

### `nul` (nextjs use Image component)

```
<Image src='path' width='width' height='height' alt='alt' />

```

### `nspage` (nextjs page with getServerSideProps)

### Javascript

```
export default function Test() {
  return <div>Enter</div>;
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

```

### Typescript

```
import { GetServerSideProps } from "next";

const Test = () => {
  return <div>Enter</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Test;

```

### `nstaticpage` (nextjs page with getStaticProps and getStaticPaths)

### Javascript

```
export default function Test() {
  return <div>Enter</div>;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

```

### Typescript

```
import { GetStaticPaths, GetStaticProps } from "next";

const test = () => {
  return <div>Enter</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default test;

```

### `nnotfound` (nextjs not found page)

### Javascript

```
export default function test() {
    return (
        <div>
            <h1>
                Page Not Found
            </h1>
        </div>
    );
}

```

### `nservererror` (nextjs server error page)

### Javascript

```
export default function test() {
    return (
        <div>
            <h1>
                Server Error
            </h1>
        </div>
    );
}

```

### `ngetServerSideProps` (nextjs getServerSideProps function)

### Javascript

```
export async function getServerSideProps(ctx){

    return {
        props:{
            data:null
        }
    }
}

```

### Typescript

```
export const getServerSideProps: GetServerSideProps = async (ctx) => {

    return {
        props:{

        }
    }
}

```

### `ngetStaticProps` (nextjs getStaticProps function)

### Javascript

```
export async function getStaticProps(ctx) {

    return {
        props:{
            data:null
        }
    }
}

```

### Typescript

```
export const getStaticProps: GetStaticProps = (ctx) => {

    return {
        props:{

        }
    }
}

```

### `ngetStaticPaths` (nextjs getStaticPaths function)

### Javascript

```
export async function getStaticPaths() {

    return {
        paths:[],
        fallback:false
    }
}

```

### Typescript

```
export const getStaticPaths: GetStaticPaths = () => {

    return {
        paths:[],
        fallback:false
    }
}

```

### `nul` (nextjs use link element)

### Javascript

```
<Link href='path'>link</Link>

```

# Javascript

## Page initialization snippets

### `nafe` (nextjs arrow function (export at the end))

```
const FileName = () => {
  return <div>CONTENT</div>;
};

export default FileName;

```

### `naf` (nextjs arrow function)

```
export default () => {
  return <div>CONTENT</div>;
};

```

### `nfe` (nextjs normal function (export at the end))

```
function FileName() {
  return <div>CONTENT</div>;
}

export default FileName;

```

### `nf` (nextjs normal function )

```
export default function () {
  return <div>CONTENT</div>;
}

```

### `ngsspr` (nextjs getServerSideProps)

### Javascript

```
export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

```

### Typescript

```
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props:{
            data:null
        }
    }
}

```

### `ngspr` (nextjs getStaticProps)

### Javascript

```
export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

```

### Typescript

```
export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props:{
            data:null
        }
    }
}

```

### `ngspa` (nextjs getStaticPaths)

### Javascript

```
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

```

### Typescript

```
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths:[],
        fallback:false
    }
}

```

### `ngipr` (nextjs getInitialProps)

```
FileName.getInitialProps = async (ctx) => {

    return {
        ${3:data:null}
    }
}

```

## Nextjs Custom app and document (\_app.js,\_document.js)

### `ncapp` (nextjs custom app)

### Javascript

```
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

```

### Typescript

```
import type {AppProps} from 'next/app'

const MyApp = ({ Component, pageProps }:AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp;

```

### `ncdocument` (nextjs custom document)

### Javascript

```
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head/>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

```

## Nextjs api routes

### `napi` (nextjs api route)

### Javascript

```
export default function handler(req, res)  {
    req.statusCode = 200
}

```

### Typescript

```
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    req.statusCode = 200
}

```

## Nextjs page initialization function with Nextjs functions

### `nafewserver` (nextjs arrow function (export at the end) with getServerSideProps)

### Javascript

```
const FileName = () => {
  return <div>CONTENT</div>;
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default FileName;

```

### Typescript

```
import { GetServerSideProps } from 'next';

const Test = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    return {
        props:{
            data:null
        }
    }
}

export default Test;

```

### `nfewserver` (nextjs normal function (export at the end) with getServerSideProps)

### Javascript

```
function FileName() {
  return <div>CONTENT</div>;
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default FileName;

```

### `nafewstatic` (nextjs arrow function (export at the end) with getStaticProps)

### Javascript

```
const FileName = () => {
  return <div>CONTENT</div>;
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default FileName;

```

### Typescript

```
import {GetStaticProps} from 'next';

const Test = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export const getStaticProps:GetStaticProps = async (ctx) => {

    return {
        props:{
            data:null
        }
    }
}

export default Test;

```

### `nfewstatic` (nextjs normal function (export at the end) with getStaticProps)

### Javascript

```
function FileName() {
  return <div>CONTENT</div>;
}

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default FileName;

```

## Static generation snippet

### `!!static` (initializing function with getStaticPaths and getStaticProps)

### Javascript

```
const FileName = () => {
  return <div>CONTENT</div>;
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default FileName;

```

### Typescript

```
import {GetStaticPaths,GetStaticProps} from 'next';

const Test = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export const getStaticPaths:GetStaticPaths = async () => {
    return {
        paths:[],
        fallback:false
    }
}
export const getStaticProps:GetStaticProps = async (ctx) => {
    return {
        props:{
            data:null
        }
    }
}

export default Test;

```

## Importing Components

### `nil` (nextjs import link)

```
import Link from "next/link";

```

### `nir` (nextjs import router(default))

```
import Router from "next/router";

```

### `niur` (nextjs import useRouter)

```
import { useRouter } from "next/router";

```

### `nih` (nextjs import Head)

```
import Head from "next/head";

```

## Imported Components Usage

### `nulwhref` (nextjs use link with href)

```
<Link href="path">
  <a>Value</a>
</Link>

```

### `nuur` (nextjs use useRouter)

```
const router = useRouter();

```

### `nuh` (nextjs use Head )

```
<Head>
  <title>Title</title>
</Head>

```

### `nul` (nextjs use Image component)

```
<Image src='path' width='width' height='height' alt='alt' />

```

## Deprecated Typescript Snippets

## Nextjs page initialization function with Nextjs functions

### `ntsfwserver` (nextjs typescript function with getServerSideProps (DEPRECATED))

```
import { GetServerSideProps } from "next";

const FileName = () => {
  return <div>CONTENT</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default FileName;

```

### `ntsfwstatic` (nextjs typescript function with getStaticProps (DEPRECATED))

```
import { GetStaticProps } from "next";

const FileName = () => {
  return <div>CONTENT</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default FileName;

```

## Nextjs api routes

### `ntsapi` (nextjs typescript api route (DEPRECATED))

```
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {};

```

## Nextjs Custom app and document (\_app.js,\_document.js)

### `ntscapp` (nextjs typescript custom app)

```
import { AppProps } from 'next/app';

const MyApp = ({ Component pageProps }:AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp;

```

### `ntscdocument` (nextjs typescript custom document (DEPRECATED))

```
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

```

## Static generation snippet

### `!!tsstatic` (initializing function with getStaticPaths and getStaticProps(typescript) (DEPRECATED))
