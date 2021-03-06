import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";
import book from "./ebar-vinno-kichu-hok.jpg";

const Book = () => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <h2 className="text-3xl ml-8 text-gray-500 text-left mb-6 w-10/12">
        এবার ভিন্ন কিছু হউক, <span className="text-sm">By আরিফ আজাদ</span>
      </h2>
      <div className="book">
        <div className="info pr-4 lg:pr-16">
          <p className="text-left text-normal text-gray-500 mb-8">
            প্রতিদিন একটা একঘেয়েমি চক্রে কেটে যাচ্ছে জীবনের প্রতিটি মুহূর্ত।
            মাঝে মাঝে আফসোস লাগে—এভাবে একটা জীবন চলতে পারে? এভাবেই কি ক্ষয়ে
            যাওয়ার কথা আস্ত একটা জীবন? কী পাওয়ার বদলে কী হারাচ্ছি জীবন থেকে?
            জীবনে একটা বদল প্রয়োজন, একটা পরিবর্তন ভীষণ জরুরি—তা আমরা জানি।
            কিন্তু কীভাবে শুরু করবো? ঠিক কোথা থেকে যাত্রা করবো নতুন এক দিনের?
            কীভাবে মেলে ধরবো নিজের সবটুকু সম্ভাবনা? কীভাবে পেছনে ফেলে আসবো সকল
            ব্যর্থতা? যে অন্ধকারে হারিয়ে খুঁজে বেড়াচ্ছি নিজেকে, কীভাবে সেখানে
            ঘটবে আলোর স্ফুরণ? একটা নতুন ভোরে, দখিনের জানালার পাশে বসে কিংবা
            পছন্দের কোনো জায়গা আর সময়-সুযোগ বুঝে খুলে বসতে পারেন ‘এবার ভিন্ন
            কিছু হোক’ বইটি। যে প্রশ্নগুলোর উত্তর পাবার আশায় আপনি চাতক পাখির মতো
            তাকিয়ে, হৃদয়ের উঠোনে যে এক পশলা ঝুম বৃষ্টির প্রতীক্ষায় আপনি গুনে
            চলেছেন অজস্র প্রহর, ইনশাআল্লাহ বইটি আপনাকে সেই কাঙ্ক্ষিত মুহূর্তগুলো
            উপহার দেবে। জীবনের এক নতুন উপাখ্যান রচনায় বইটি হতে পারে আপনার
            নিত্যদিনের সাথি।
          </p>
          <Link
            className="bg-green-600 text-white py-2 px-12 float-left rounded shadow-lg"
            to="/reviews"
          >
            বিস্তারিত জানুন{" "}
          </Link>
        </div>
        <div className="image">
          <img src={book} alt="Ebar vinno kichu hok" />
        </div>
      </div>
    </div>
  );
};

export default Book;
