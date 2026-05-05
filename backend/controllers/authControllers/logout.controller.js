

export const logoutController = async (req, res) => {
    try {
        //delete token from cookie storage
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })
        res.status(200).json({ message: "Logout Success!!" })
    }
    catch (err) {
        res.status(500).json({ message: "Logout Failed!" })
    }
}