async function likingTweete(id) {

    const response_pending = await fetch(`/tweetes/${id}/like`, {
        method: "POST",
        body: JSON.stringify(id)
    })
    const response = await response_pending.json();
    return response;
}

export {likingTweete}

async function retweetingTweete(id) {

    const response_pending = await fetch(`/tweetes/${id}/retweet`, {
        method: "POST",
        body: JSON.stringify(id)
    })
    const response = await response_pending.json();
    return response;
}

export { retweetingTweete }