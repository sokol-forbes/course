import Post from './Post'
import './styles/style.css'
import WebpackLogo from './assets/webpack-logo.png'
const post = new Post('Webpack Post Title',WebpackLogo)
console.log('Post to string ', post.toString())