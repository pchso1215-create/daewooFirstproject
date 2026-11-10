function sizeFunc (start,end,step){
    const sizes = []
    for(let size = start; size<= end; size+=step){
        sizes.push(size)
    }
    return sizes
}
export {sizeFunc}
