import {describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Login }  from '../pages/Login';

describe('Login component is present', ()=>{
    test("renders", () =>{
        render(Login);
    })
})