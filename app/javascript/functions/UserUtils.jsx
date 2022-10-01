async function getUser(username) {
    const user_request = await fetch(`/users/${username}`);
    const user = await user_request.json();
    return user;
}

export { getUser };