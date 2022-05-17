const initialStateList = {
    LoginDetails: [],
    HomepageData: ''
}

function ReduxCommands(state = initialStateList, action) {
    switch (action.type) {
        case "LoginDetailsSave":
            return {
                LoginDetails: [{ id: action.payload.id, MobileNumber: action.payload.MobileNumber, created_at: action.payload.created_at, login_token: action.payload.login_token }],
                HomepageData: (state.HomepageData)
            }
        case "HomepageDataSave":
            return {
                LoginDetails: (state.LoginDetails),
                HomepageData: (action.payload.dataList)
            }
        case "LogoutUser":
            return {
                LoginDetails: [],
                HomepageData: ""
            }
        default: return state
    }
}

export default ReduxCommands;


