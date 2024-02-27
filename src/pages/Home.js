import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Home() {
    const [players, setPlayer] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadPlayer();
    }, []);

    const loadPlayer = async () => {
        const result = await axios.get("http://localhost:8080/player");
        setPlayer(result.data);
    };

    const deletePlayer = async (id) => {
        await axios.delete(`http://localhost:8080/player/${id}`);
        loadPlayer();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {players.map((player, index) => (
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{player.name}</td>
                            <td>{player.lastname}</td>
                            <td>{player.age}</td>
                            <td>
                                <button className="btn btn-danger mx-2"
                                        onClick={() => deletePlayer(player.id)}
                                >
                                    Delete

                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}