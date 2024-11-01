import { Html, Head, Font, Preview, Heading, Row, Section, Text, Button } from "@react-email/components";

interface VerificationProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationProps) {
    return (<Html>
        <Head>
            <title>Verification Code</title>
            <Font
                fontFamily="Roboto"
                fallbackFontFamily={"Verdana"}
                fontWeight={400}
                fontStyle="normal"
            />

        </Head>
        <Preview>Here&apos;s your verification code : {otp}</Preview>
        <Section>
            <Row>
                <Heading as="h2">Hello, {username}</Heading>
            </Row>
            <Row>
                <Text>
                    Thank you for registering. Please use the following verification code to complete your registration :
                </Text>
            </Row>
            <Row>
                <Text>{otp}</Text>
            </Row>
            <Row>
                <Text>
                    If you did not request this code, Please ignore this email.
                </Text>
            </Row>
            {/* <Row>
                <Button style={{color : "#61dafb"}} href={`http://localhost:3000/verify/${username}`}>
                    Verify here
                </Button>
            </Row> */}
        </Section>
    </Html>)
}