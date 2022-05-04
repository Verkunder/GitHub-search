import React, { FC, useState, useEffect } from "react"

interface GitHubUserProps {
    username: string | undefined
}

const GitHubUser: FC<GitHubUserProps> = ({ username }) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!username) return
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [username])
    console.log(data)
    if (loading) return <h1>loading...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if (!data) return null

    return (
        <div className='container'>
            <hr />
            <div className='git__container'>
                <img
                    src={data["avatar_url"]}
                    alt={data["login"]}
                    className='rounded pt-5'
                    style={{width: '200px'}}
                />
            </div>
            <div className="container pt-5 pb-5">
                <div className="row g-2">
                    <div className="col-6">
                        <div className="p-3"><h2>Username</h2></div>
                        <div className="p-3 border bg-light">{data['login']}</div>
                        <div className="p-3"><h2>Name</h2></div>
                        <div className="p-3 border bg-light">{data['name']}</div>
                        <div className="p-3"><h2>Location</h2></div>
                        <div className="p-3 border bg-light">{data['location']}</div>
                        <div className="p-3"><h2>Public repos</h2></div>
                        <div className="p-3 border bg-light">{data['public_repos']}</div>
                        <div className="p-3"><h2>Url</h2></div>
                        <div className="p-3 border bg-light">{data['html_url']}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GitHubUser
