export function _auth(): void {
    const authRoute = "/auth";
    const user = localStorage.getItem('user');

    if (user === undefined || user === null) location.href = authRoute;
}