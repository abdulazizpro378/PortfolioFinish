// import { useEffect, useState } from "react";
// import { Spin, Modal, Button, Form, Input, message, Empty } from "antd";
// import { LoadingOutlined, ExclamationCircleFilled } from "@ant-design/icons";
// import { request } from "../../server/request";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import "../../pages/user/about/about.scss";
// import "../../components/styles/clientPanelStyles/skills.scss";
// import { SkillsType } from "../../types/types";

// const SkillsP = () => {
//   const [skills, setSkills] = useState<SkillsType[]>([]);
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selected, setSelected] = useState<string | null>(null);
//   const [, setEdit] = useState(null);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const hideModal = () => {
//     setIsModalOpen(false);
//   };

  // const getSkills = async () => {
  //   try {
  //     const { data } = await request.get(
  //       // `skills${ROLE === 'client' ? `?user[in]=${USER_ID}` : ''}`
  //       "skills?user=64dde9e1dccb1b00143b2e8e"
  //     );
  //     setLoading(true);
  //     setSkills(data?.data);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getSkills();
  // }, []);

//   const onFinish = async (values: SkillsType) => {
//     try {
//       const { name, percent } = values;
//       const skillData = { name, percent };
//       if (selected) {
//         const response = await request.put(`skills/${selected}`, skillData);
//         if (response.status === 200) {
//           getSkills();
//           hideModal();
//         } 
//       } else {
//         const response = await request.post("skills", skillData);
//         if (response.status === 201) {
//           getSkills();
//           hideModal();
//           message.success('You can also check here')
//         }
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const setEditingValues = (data: SkillsType) => {
//     form.setFieldsValue({ name: data.name, percent: data.percent });
//   };

//   const openModal = () => {
//     showModal();
//     form.resetFields();
//     setSelected(null)
//   };

//   async function editSkill(id: string) {
//     try {
//       const { data } = await request.get(`skills/${id}`);
//       setEdit(data);
//       setSelected(id);
//       setEditingValues(data);
//       showModal();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   // async function deletePost(id: string) {
//   //   try {
//   //     Modal.confirm({
//   //       title: "Confirm",
//   //       icon: <ExclamationCircleFilled />,
//   //       content: "Dou wou want to delete this skill ?",
//   //       okText: "Delete",
//   //       cancelText: "Cancel",
//   //       onOk: async () => {
//   //         await request.delete(`skills/${id}`);
//   //         message.success("Post deleted");
//   //         getSkills();
//   //       },
//   //     });
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // }
//   // function deletePost(id: string) {
//   //   Modal.confirm({
//   //     title: "Do you Want to delete this post?",
//   //     onOk: async () => {
//   //       try {
//   //         await request.delete(`skills/${id}`);
//   //         getSkills();
//   //       } catch (err) {
//   //         console.log(err);
//   //       }
//   //     },
//   //   });
//   // }
  

//   function deletePost(id: string) {
//     Modal.confirm({
//       title: "Do you want to delete this skill?",
//       onOk: async () => {
//         try {
//           await request.delete(`skills/${id}`);
//           message.success("Skill deleted");
//           getSkills(); // This line will refresh the skills after deletion
//         } catch (err) {
//           console.log(err);
//         }
//       },
//     });
//   }
  

//   const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
//   return (
//     <section className="slider">
//       <div className="container">
//         <div className="slider-paragraph" style={{ marginTop: "40px" }}>
//           <h2>My Skills</h2>
//           <button onClick={openModal}>Add</button>
//         </div>
//         <Modal
//           title={selected ? "Editing skill" : "Adding new skill"}
//           open={isModalOpen}
//           onCancel={hideModal}
//           footer={false}
//         >
//           <Form
//             id="addPostForm"
//             layout="vertical"
//             autoComplete="off"
//             onFinish={onFinish}
//             form={form}
//           >
//             <Form.Item
//               name="name"
//               label="Name"
//               rules={[
//                 {
//                   required: true,
//                   message: "Name is required",
//                 },
//               ]}
//             >
//               <Input placeholder="Enter a name" />
//             </Form.Item>
//             <Form.Item
//               name="percent"
//               label="Percent"
//               rules={[
//                 {
//                   required: true,
//                   message: "Percent is required",
//                 },
//               ]}
//             >
//               <Input type="number" placeholder="Enter number" />
//             </Form.Item>
//             <Button
//               danger
//               type="primary"
//               onClick={hideModal}
//               style={{ marginRight: "10px" }}
//             >
//               Close
//             </Button>
//             <Button type="primary" htmlType="submit">
//               {selected ? "Edit skill" : "Create skill"}
//             </Button>
//           </Form>
//         </Modal>
//         {loading ? (
//           <Spin
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               paddingBottom: "50px",
//             }}
//             indicator={antIcon}
//           />
//         ) : null}
//         <section className="skills">
//           <div className="skills__container grid" style={{ marginTop: "50px" }}>
//             {skills.length == 0
//               ? <Empty />
//               : skills?.map((skill: SkillsType) => (
//                   <div className="progress__boxss" key={skill?._id}>
//                     <div className="progress__circle">
//                       <CircularProgressbar
//                         strokeWidth={7.5}
//                         text={`${skill?.percent}%`}
//                         value={skill.percent}
//                       />
//                     </div>
//                     <h3 className="skills__title">{skill?.name}</h3>
//                     <div className="btns">
//                       <Button
//                         type="primary"
//                         onClick={() => editSkill(skill?._id)} >
//                         Edit
//                       </Button>
//                       <Button danger onClick={() => deletePost(skill?._id)}>
//                         Delete
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default SkillsP;








import { useEffect, useState, useCallback } from "react";
import { Modal, Form, Input, Button } from "antd";
// import { request } from "../../request/index";
import { Progress, Space, Pagination } from "antd";
import { request } from "../../server/request";
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import Loading from "../../components/loading/loading";
interface SkillsType {
  _id: string;
  name: string;
  percent: number;
}

const SkillsP = () => {
  const { Search } = Input;
  const [search, setSearch] = useState("");
  const [form] = Form.useForm();
  const [myskills, setMyskills] = useState<SkillsType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize, setPageSize] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  // const albumId = localStorage.getItem("AlbomID");

  const getSkills = useCallback(async () => {
    try {
      // if ('') {
        // Shartni qo'shing
        // const { data } = await request.get(`skills?user=${albumId}`);
        const { data } = await request.get(
          // `skills${ROLE === 'client' ? `?user[in]=${USER_ID}` : ''}`
          "skills?user=64e2093d8abcf80014588ce7"
        );
        console.log(data);

        setMyskills(data.data);
        setIsLoading(false);
      // }
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  }, []);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };



  const submit = async () => {
    try {
      const values = await form.validateFields();
      // console.log(values);
      if (selected) {
        await request.put(`skills/${selected}`, values);
      } else {
        await request.post("skills", values);
      }
      form.resetFields();
      hideModal();
      getSkills();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  async function editTeacher(id: string) {
    console.log(id);
    
    const { data } = await request.get(`skills/${id}`);
    console.log(data);
    form.setFieldsValue(data);
    setSelected(id);
    showModal();
  }

  const openModal = () => {
    showModal();
    form.resetFields();
    setSelected(null);
  };

  const filteredProduct = myskills.filter(
    (pr) =>
      pr &&
      pr.name && // Add null/undefined checks
      pr.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  console.log(myskills);
  
  // const paginatedTeachers = filteredProduct.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize
  // );


function deleteTeacher(id: string) {
    Modal.confirm({
      title: "Do you Want to delete this post?",
      onOk: async () => {
       
        
        try {
          await request.delete(`skills/${id}`);
          getSkills();
        } catch (err) {
          console.log(err);
        }
      },
    });
  }
  return (
    <section className="slider">
      <div className="container">
        <div className="slider-paragraph" style={{ marginTop: "40px" }}>
          <Search
            placeholder="input search text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="serch"
          />
          <Button onClick={openModal}>Add</Button>
        </div>
        <Modal
          title="Adding teacher"
          open={isModalOpen}
          onOk={submit}
          okText={selected ? "Save" : "Add"}
          onCancel={hideModal}
        >
          <Form
            initialValues={{
              isMarried: false,
            }}
            form={form}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Name is required",
                },
              ]}
            >
              <Input placeholder="Enter a name" />
            </Form.Item>
            <Form.Item
              name="percent"
              label="Percent"
              rules={[
                {
                  required: true,
                  message: "Percent is required",
                },
              ]}
            >
              <Input type="number" placeholder="Enter number" />
            </Form.Item>
          </Form>
        </Modal>
        <section className="skills">
          {isLoading ? ( // Ma'lumotlar yuklanayotgan payt
            <div className="loading-container">
              {/* <Loading /> */}
              ...loading
            </div>
          ) : (
            <div className="skills__container grid">
              {myskills?.map((pr) => (
                <div key={pr._id} className="card">
                  <div className="card-header"> {pr.name}</div>
                  <div className="card-main">
                    <Space wrap>
                      <Progress type="circle" percent={pr.percent} />
                    </Space>
                    <div className="main-description">
                      <Button
                        onClick={() => editTeacher(pr._id)}
                        className="tag__item"
                      >
                        {/* <EditOutlined
                          style={{
                            fontSize: "26px",
                            color: "green",
                            gap: "15px",
                          }}
                        /> */}
                        Edit
                      </Button>
                      <Button
                        onClick={() => deleteTeacher(pr._id)}
                        className="tag__item"
                      >
                        {/* <DeleteOutlined
                          style={{ fontSize: "26px", color: "red" }}
                        /> */}

                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div className="paganation">
            <Pagination
              current={currentPage}
              // pageSize={pageSize}
              total={filteredProduct.length} // Ma'lumotlar to'plami uzunligi
              showSizeChanger={false} // Elementlar sonini o'zgartirish imkoniyatini o'chirish
              onChange={handlePageChange}
              style={{ padding: "10px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsP;