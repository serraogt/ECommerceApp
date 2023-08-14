import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  } from "../data/Slicer";
import { Link } from "react-router-dom";

function DeletePage() {
    const count = useSelector((state) => state.counter.count);
    const { count2 } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    
    //bir yere bağlayamadım henüz
    return(
        <div> Number Of Countries {count} <br/>
        <Link to={'/home'}>back</Link></div>
    )
    }
    export default DeletePage;