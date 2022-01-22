// eslint-disable-next-line no-undef
export default sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}