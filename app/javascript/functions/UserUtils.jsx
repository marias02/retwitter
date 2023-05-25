export async function getUser(username) {
    const user_request = await fetch(`/users/${username}`);
    const user = await user_request.json();
    return user;
}

export async function getAllUsers() {
    const all_users_request = await fetch('/users');
    const all_users = await all_users_request.json();
    return all_users;
}