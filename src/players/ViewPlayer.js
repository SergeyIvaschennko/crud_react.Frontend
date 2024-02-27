import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewPlayer() {
    const [player, setPlayer] = useState({
        name: "",
        lastname: "",
        age: 0,
    });

    const { id } = useParams();

    useEffect(() => {
        loadPlayer();
    }, []);

    const loadPlayer = async () => {
        const result = await axios.get(`http://localhost:8080/player/${id}`);
        setPlayer(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Player Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of Player id : {player.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name:</b>
                                    {player.name}
                                </li>
                                <li className="list-group-item">
                                    <b>PlayerName:</b>
                                    {player.lastname}
                                </li>
                                <li className="list-group-item">
                                    <b>Age:</b>
                                    {player.age}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}