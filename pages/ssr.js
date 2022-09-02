export async function getServerSideProps(context) {
  return {
    props: {
      age: 24,
      color: "red",
      password: "apple",
    },
  };
}

export default function SSR({ age, color }) {
  return (
    <div>
      SSR Page, Age: {age}, Color: {color}
    </div>
  );
}
