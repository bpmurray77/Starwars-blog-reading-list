import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store, actions } = useContext(Context);
    return(
        <div>Test</div>
    );
};

export {Planets};