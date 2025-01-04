import Duolingo from "duolingo";

export default async function getDuolingoUserInfo() {
    try {
        const duo = new Duolingo("THEALIFHAKER1");
        await duo.init();

        if (!duo.data) {
            throw new Error("Failed to retrieve data from Duolingo");
        }

        const users = duo.data.users[0];
        return users;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
