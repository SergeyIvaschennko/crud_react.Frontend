import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPlayer() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [player, setPlayer] = useState({
        name: "",
        lastname: "",
        age: 0,
    });

    const { name, lastname, age } = player;

    const onInputChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadPlayer();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/player/${id}`, player);
        navigate("/");
    };

    const loadPlayer = async () => {
        const result = await axios.get(`http://localhost:8080/player/${id}`);
        setPlayer(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Player</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Playername" className="form-label">
                                Player name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter lastname"
                                name="lastname"
                                value={lastname}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Age" className="form-label">
                                Age
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter age"
                                name="age"
                                value={age}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}