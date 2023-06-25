import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import ButtonLoader from "../layout/ButtonLoader";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearErrors } from "../../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      router.push("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, success, error]);

  const submitHandlere = (event) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      password,
      avatar,
    };
    dispatch(registerUser(userData));
  };

  return;
};

export default Register;
