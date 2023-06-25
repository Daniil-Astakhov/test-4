import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Table, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";

import { getUser } from "services/UserList";
import { setCurrentUser } from "store/slices/userSlise";
import Loading from "components/shared-components/Loading";

const UserList = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    user: [],
    userProfileVisible: false,
    selectedUser: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setState((prevState) => ({
          ...prevState,
          user: userData,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = (id, userId) => {
    setState((prevState) => ({
      ...prevState,
      user: prevState.user.filter((item) => item.id !== id),
    }));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = (userInfo) => {
    setState((prevState) => ({
      ...prevState,
      userProfileVisible: true,
      selectedUser: userInfo,
    }));
  };

  const closeUserProfile = () => {
    setState((prevState) => ({
      ...prevState,
      userProfileVisible: false,
      selectedUser: null,
    }));
  };

  const showUserProfiles = (userInfo) => {
    const newUser = {
      id: userInfo.id,
      name: userInfo.name,
      userName: userInfo.username,
      email: userInfo.email,
      phoneNumber: userInfo.phone,
      website: userInfo.website,
      address: userInfo.address.street + `. ${userInfo.address.suite}.`,
      city: userInfo.address.city,
      postcode: userInfo.address.zipcode,
    };
    dispatch(setCurrentUser(newUser));
  };

  const { user, userProfileVisible, selectedUser } = state;

  const tableColumns = [
    {
      title: "User",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={record.img}
            name={record.name}
            subTitle={record.email}
            onClick={() => {
              showUserProfiles(record);
            }}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (_, record) => <div className="d-flex">{record.phone}</div>,
    },
    {
      title: "Last online",
      dataIndex: "lastOnline",
      render: (date) => (
        <span>{dayjs.unix(1586217600).format("MM/DD/YYYY")} </span>
      ),
      sorter: (a, b) => dayjs(a.lastOnline).unix() - dayjs(b.lastOnline).unix(),
    },
    {
      title: "Website",
      dataIndex: "website",
      render: (_, record) => <div className="d-flex">{record.website}</div>,
      sorter: {
        compare: (a, b) => a.website.length - b.website.length,
      },
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, record) => (
        <div className="text-right d-flex justify-content-end">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => {
                showUserProfile(record);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteUser(record.id, record.name);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return !state.user.length ? (
    <Loading />
  ) : (
    <Card bodyStyle={{ padding: "0px" }}>
      <div className="table-responsive">
        <Table columns={tableColumns} dataSource={user} rowKey="id" />
      </div>
      <UserView
        data={selectedUser}
        visible={userProfileVisible}
        currentUser={state.currentUser}
        close={() => {
          closeUserProfile();
        }}
      />
    </Card>
  );
};

export default UserList;
