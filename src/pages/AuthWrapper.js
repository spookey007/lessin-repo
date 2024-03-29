import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
function AuthWrapper({ children }) {
 const { isLoading, error } = useAuth0()

 const [loading, setLoading] = useState(true)
 useEffect(() => {
  setTimeout(() => setLoading(false), 15000)
 }, [])


    const load = () => {
        if (isLoading) {
            return (
                <Wrapper>
                    <h1>Loading....</h1>
                </Wrapper>
            )
        }

    }

    const isError = () => {
        if (error) {
            return (
                <Wrapper>
                    <h1>{error.message}</h1>
                </Wrapper>
            )
        }
        return <>{children}</>
    }


    
}

const Wrapper = styled.section`
 min-height: 100vh;
 display: grid;
 place-items: center;
`

export default AuthWrapper
