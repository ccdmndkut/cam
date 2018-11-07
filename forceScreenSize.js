export default (width, height) => {
   
        window.addEventListener('resize', () => {
            window.resizeTo(width, height)
        })
  
}