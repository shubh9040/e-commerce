import React from 'react'
import path from 'path'
import fs from 'fs'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../App' // Our app

// Node can not support by default.
// so we use babel.
// babel

const PORT = 8080 //You can use any port number which is not busy
const app = express()

const router = express.Router()
//^/$
app.use('/', express.static('../../../build'));

app.get('/',(req,res)=>{
    const context = {}
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )

    const indexFile = path.resolve('../../../build/index.html')
    fs.readFile(indexFile,'utf8',(err,data)=>{
        if(err)
        {
            console.log("error")
            return res.status(500).send('oops! error')

        }
        return res.send(data.replace('<div id="root"></div>',`<div id="root">${app}</div>`));
    })
})


router.use(express.static(path.resolve(__dirname,"../../../",'build'),{maxAge:'10d'}))
app.use(router)
app.listen(PORT,()=>{
    console.log(`SSR port is running on`,PORT)
})


// const serverRenderer = (req, res, next) => {
//     console.log(req)
//   fs.readFile(path.resolve('../../../build/index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).send('An error occurred')
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`// it will convert our app into string
//       )
//     )
//   })
//   next();
// }
// router.use('^/$', serverRenderer)

// router.use((req, res, next) => {
//     console.log(req)
//   fs.readFile(path.resolve('../../../build/index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).send('An error occurred')
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`// it will convert our app into string
//       )
//     )
//   })
//   next();
// })

// // router.use(
// //   express.static(path.resolve(__dirname, '../../../', 'build'), { maxAge: '30d' })
// // )

// // tell the app to use the above rules
// app.use(router)

// // app.use(express.static('./build'))
// app.listen(PORT, () => {
//   console.log(`SSR running on port ${PORT}`)
// })
