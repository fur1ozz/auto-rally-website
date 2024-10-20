import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';

const ALLOWED_LANGS = ['lv', 'en', 'ua', 'lt', 'ee'];

function LangParamValidator() {
    const { lng } = useParams();

    if (lng && ALLOWED_LANGS.includes(lng)) {
        return <Outlet />;
    }

    return <Navigate to="/lv/home" replace />;
}

export default LangParamValidator;
