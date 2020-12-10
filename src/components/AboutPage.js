import React from 'react'
import {Card, Button} from 'react-bootstrap'

const AboutPage = () => {
    return (
        <div style={{width: "30rem", margin: "auto", marginTop: "10rem"}}>
            <Card className="text-center">
                <Card.Header>Sepatah kata dari pengembang</Card.Header>
                <Card.Body>
                    <Card.Title>Cari Kampus</Card.Title>
                    <Card.Text>
                        Dibuat dengan menggunakkan React.js, oleh Gillian Saroinsong
                        <br/>
                        <br/>
                        Aplikasi menggunakkan API Universities.hipolabs.com untuk menunjukkan daftar universitas di Indonesia
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">~dev</Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage