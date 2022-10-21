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

async function submitNewTweete(tweete) {
    const formData = new FormData();
    formData.append("text", tweete.text)
    if (tweete.media != null) {
       formData.append("media", tweete.media) 
    }
    const response_pending = await fetch('/tweetes/new', {
        method: "POST",
        body: formData
    })
    const response = await response_pending.json();
    return response;
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