import { useState } from "react";
import { addVideo } from "../api/video";

const Modal = ({ isOpen, onClose, onUpload }) => {
  const [video, setVideo] = useState({
    videoFile: null,
    imageFile: null,
    videoTitle: "",
    videoDesc: "",
    channelCode: 2,
  });
  if (!isOpen) return null;

  const upload = async () => {
    const formData = new FormData();
    formData.append("videoFile", video.videoFile);
    formData.append("imageFile", video.imageFile);
    formData.append("videoTitle", video.videoTitle);
    formData.append("videoDesc", video.videoDesc);
    formData.append("channelCode", video.channelCode);
    const response = await addVideo(formData);
    console.log(response.data); // 새 비디오 정보
    onUpload(response.data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">비디오 업로드</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            비디오 파일
          </label>
          <input
            type="file"
            className="mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            onChange={(e) =>
              setVideo({ ...video, videoFile: e.target.files[0] })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            이미지 파일
          </label>
          <input
            type="file"
            className="mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            onChange={(e) =>
              setVideo({ ...video, imageFile: e.target.files[0] })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            비디오 제목
          </label>
          <input
            type="text"
            className="mt-2 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
            placeholder="비디오 제목 입력"
            value={video.videoTitle}
            onChange={(e) => setVideo({ ...video, videoTitle: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            비디오 설명
          </label>
          <textarea
            className="mt-2 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
            rows="4"
            placeholder="비디오 설명 입력"
            value={video.videoDesc}
            onChange={(e) => setVideo({ ...video, videoDesc: e.target.value })}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
            onClick={upload}
          >
            업로드
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
