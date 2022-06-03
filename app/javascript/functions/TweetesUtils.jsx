// MODEL FOR TWEETES FETCH
async function getLatestFollowingTweetes () {
    const tweetes_request = await fetch('/tweetes/following_latest_tweetes');
    const tweetes = await tweetes_request.json();
    return tweetes;
}

export { getLatestFollowingTweetes }