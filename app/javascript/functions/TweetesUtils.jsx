// MODEL FOR TWEETES FETCH
async function getLatestFollowingTweetes () {
    const tweetes_request = await fetch('/tweetes/following_latest_tweetes');
    const tweetes = await tweetes_request.json();
    return tweetes;
}

export { getLatestFollowingTweetes }

async function getTweete(id) {
    const tweete_request = await fetch(`/tweetes/${id}`);
    const tweete = await tweete_request.json();
    return tweete;
}

export { getTweete }

const submitNewTweete = tweete => {
    fetch('/tweetes/new', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(tweete)
    }).then(response => {
        response.json();
    });
}

export { submitNewTweete }

const deleteTweete = id => {
    fetch(`/tweetes/delete/${id}`, {
        method: "DELETE"
    }).then(response => {
        response.json();
    });
}

export { deleteTweete }