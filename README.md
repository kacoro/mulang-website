# nuxt

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



# 

ip地址必须一致，否则在IE9会导致Unhandled promise rejection Error: 拒绝访问 的错误

graphql不支持写相对地址，如何实现代理呢？new GraphQLClient('http://192.168.179.97:5000/graphql'
```
 proxy: {
    '/graphql':{
      target: 'http://192.168.179.97:4000',
    }
```

#pm2
```
pm2 start npm --name cst-website -- run star
```
