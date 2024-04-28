import React, { createContext, useContext, useState } from 'react';

// 创建用户上下文
const UserContext = createContext();

// 上下文提供者组件
function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({ name: username });
    };

    const logout = () => {
        setUser(null);
    };

    /**
     * 在React中，每个由createContext()创建的Context对象都自带一个.Provider组件，这是固定的命名和用法。
     * .Provider是特定于Context API的组件，用于将context的当前值传递给它的所有子组件。
     * 你不能将它命名为其他名称，因为.Provider是Context对象提供的固有属性，是React的内置设计。
     *
     * */
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// 使用上下文的组件
function LoginButton() {
    const { login } = useContext(UserContext);
    return <button onClick={() => login('John Doe')}>Login</button>;
}

function LogoutButton() {
    const { logout } = useContext(UserContext);
    return <button onClick={logout}>Logout</button>;
}

function UserInfo() {
    const { user } = useContext(UserContext);
    return <div>{user ? `Welcome, ${user.name}` : 'Please log in'}</div>;
}

// 应用组件
function App() {
    return (
        <UserProvider>
            <UserInfo />
            <LoginButton />
            <LogoutButton />
        </UserProvider>
    );
}

export default App;
