import _ from 'lodash'
import axios from 'axios'
import Router from 'next/router'
import getToken from './getToken'
import { baseURL } from 'configs'

export async function auth(ctx) {
  let token = getToken(ctx)
  console.log(
    'auth token: ',
    token
  )

  if (!!!token) {
    goToPage(ctx, '/login')
  }
  return token

  try {    
    // yeu cau backend tao mot endpoint de check token co hop le hay khong
    const response = await axios.get(baseURL + '/user/check-token', {
      headers: { Authorization: `Bearer ${token}` },
    })
    // dont really care about response, as long as it not an error
  } catch (err) {
    // in case of error    
    // redirect to login
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/login',
      })
      ctx.res.end()
    } else {
      Router.push('/login')
    }
  }

  return token
}

export async function handleAuthSSRForLoginPage(ctx) {
  let token = getToken(ctx)
  if (!_.isEmpty(token)) {
    goToPage(ctx, '/')
  }

}

function goToPage(ctx, path) {
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: path,
    })
    ctx.res.end()
  } else {
    Router.push(path)
  }
}
