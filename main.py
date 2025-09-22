import streamlit as st


st.title("Hello, Streamlit!")
st.write("Welcome to your first Streamlit app.")
st.sidebar.header("Sidebar")
option = st.sidebar.selectbox("Choose an option", ["Option 1", "Option 2", "Option 3"])