export default isLogged = () => {
    const log:string | null = window.localStorage.getItem('cardAppLog');
    if(log && log === 'true') {
        return true;
    } else {
        return false;
    }
}