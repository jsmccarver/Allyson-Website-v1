import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Allyson Freeman</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <section className={"showcase"}>
          <div className={"container grid"}>
            <div className={"showcasetext"}>
              <h1>Hello!</h1>
              <p>
                It's Allyson! I like maps, rocks, cute things. Do you want a
                little map. Let me know. I like to make a little map.
              </p>
            </div>

            <div className={"showcaseform card"}>
              <h2>Say Hi!</h2>
              <form
                action="https://submit-form.com/tGHvuin8"
                className={"contact"}
              >
                <div className={"formcontrol"}>
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className={"formcontrol"}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div className={"formcontrol"}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className={"btn btnprimary"}
                />
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
