import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center mt-14 mb-10">
        <h1 className="text-4xl text-white font-bold  ">Contact</h1>
        <div className="w-52 mt-7 ml-1 h-1 bg-[#FF87B7]"></div>
      </div>
      <div className='ml-72 grid lg:grid-cols-2 sm:grid-cols-1 mt-20'>
          <form action="https://formsubmit.co/418f72ce2a407f47a997379cc0d79f67 " method="POST"  >
          <input type="hidden" name="_next" value="http://localhost:3000/thanks.html"/>
          <input type="hidden" name="_subject" value="New submission!"/>
              <label className='text-white text-xl' htmlFor="">Name: </label><br />
              <input className='rounded h-10 w-[260px]' type="text"  /><br />
              <label className='text-white text-xl ' htmlFor="">Email: </label><br />
              <input className='mb-2 h-10 w-[260px] rounded' type="email" name="email" placeholder="Email Address" required  /><br />
              <label className='text-white text-xl ' htmlFor="">Comment: </label><br />
              <textarea className='rounded w-[260px]' name="Message" placeholder="Type here your Message" id="" cols="30" rows="10" required></textarea><br />
              <button class="btn btn-secondary text-xl font-bold px-10">Send</button>
          </form >
          <div className='mt-20'>
              <h1 className="text-3xl text-white font-bold ">Email</h1>
              <p className="text-white text-xl mb-7">masummx3@gamil.com <span className='text-slate-500'>(Recommended)</span></p>
              <h1 className="text-3xl text-white font-bold ">Telegram</h1>
              <p className="text-white text-xl mb-7">https://t.me/masummx <span className='text-slate-500'>(Slow Response) </span></p>
              <h1 className="text-3xl text-white font-bold ">WhatsApp</h1>
              <p className="text-white text-xl mb-7">+8801860871112 <span className='text-slate-500'>(Always Available) </span></p>
          </div>
      </div>
    </div>
  );
};

export default Contact;
