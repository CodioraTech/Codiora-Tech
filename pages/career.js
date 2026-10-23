export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/careers',
            permanent: true,
        },
    };
}

export default function Career() {
    return null;
}
