import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request-aid',
  templateUrl: './request-aid.page.html',
  styleUrls: ['./request-aid.page.scss'],
})
export class RequestAidPage implements OnInit {

  constructor(private atrCtrl: AlertController) { }

  async showAlert() {
    const alert = await this.atrCtrl.create({
      header: 'Terms and Conditions',
      message: 'This document outlines the Terms and Conditions \
      for scholarships and awards administered by  Community for \
      Global Innovation (CFGI). All scholarships and awards will \
      be referred to as ‘scholarships’ herein. You must read these \
      Terms and Conditions in full. In accepting a scholarship from \
      CFGI, it is understood that you have read and agreed to comply \
      with these Terms and Conditions. Please note, if you are under \
      18 years of age, your parent or guardian must read and consent \
      to these terms and conditions on your behalf.\
      <br><br><br>\
      Accepting your scholarship<br><br>\
      Successful scholarship applicants will receive an email \
      detailing the scholarship benefits and payment timing. \
      If you do not wish to accept a scholarship that you have \
      been offered, you should advise us immediately in writing.\
      <br><br>\
      Your scholarships details may be passed on to your school, \
      donors or partner organization (where applicable). If you \
      do not wish for your details to be passed on, you must \
      advise CFGI in writing by email to admin@cfgi.world.\
      <br><br>\
      CFGI reserves the right to change the title of the \
      scholarship awarded depending on funding contributions \
      rom external parties. If the funding level or eligibility \
      changes, CFGI will advise the recipient before changing \
      any details but name changes can occur without notice.\
      <br><br><br>\
      How your Scholarship is paid<br><br>\
      The method of payment will be detailed in your email of \
      offer. In most cases, scholarship payments for school \
      students are made directly via CFGI or students will \
      receive payment directly.\
      <br><br>\
      At the end of each academic year for the duration of \
      your scholarship you may be asked to provide a report \
      detailing how the scholarship funds have been spent. If \
      required, it is the responsibility of the scholarship \
      recipient to provide this report to CFGI by the specified \
      time. Failure to return reports by the specified time may \
      result in future payments being withheld.\
      <br><br><br>\
      Eligibility Requirements<br><br>\
      All scholarships are awarded on the basis that you will \
      maintain an enrolled status in a higher education as an \
      international student. Your scholarship may be terminated \
      if your enrollment status changes.\
      <br><br>\
      To retain your scholarship you must also:<br>\
      - at a minimum, maintain your attendance and academic \
      performance as at the time of your application, and \
      immediately notify CFGI of any extenuating circumstances \
      that may prevent you doing so;<br>\
      - adhere to the academic and administrative policies of \
      the school and/or education institution at which you are \
      enrolled;<br>\
      - maintain your immigration status and advise CFGI within \
      fourteen days if you change your residency status;<br>\
      - meet any additional criteria outlines in your letter of offer;<br>\
      - provide confirmation of your circumstances during the term of \
      the scholarship if requested by CFGI.\
      <br><br><br>\
      Scholarship termination<br><br>\
      CFGI may terminate your scholarship if you have:<br>\
      - discontinued from your course of study or have \
      inactive enrolment;<br>\
      - failed to meet the eligibility requirements of your \
      scholarship;<br>\
      - failed to meet the scholarships terms and conditions;<br>\
      - failed to maintain satisfactory academic progress;<br>\
      - been suspended or excluded from school or your course of study;<br>\
      - been made an incorrect scholarship offer as determined by CFGI \
      at its sole discretion;<br>\
      - have provided incorrect, false or misleading information or \
      withheld relevant information on your scholarship application or \
      after receiving a scholarship offer.\
      <br><br>\
      If your scholarship is terminated, you will not receive any \
      further payments. You may be required to repay some or all of \
      your scholarship.\
      <br><br><br>\
      Repayment of your scholarship<br><br>\
      You will need to repay the scholarship if:<br>\
      - the payment is made to you in error or you have been overpaid;<br>\
      - your scholarship is terminated;<br>\
      - you do not meet the conditions of the scholarship or are deemed to \
      be ineligible for the scholarship;<br>\
      - you have been made a scholarship offer in error.<br>\
      <br><br>\
      In the event that you are required to repay your scholarship, you \
      must do so within 4 weeks of receiving the notification.\
      <br><br><br>\
      How does my scholarship affect my payments?<br><br>\
      Community for Global Innovation cannot provide you with advice on \
      taxation. The information provided here is of a general nature only \
      and does not take into account your individual circumstances. Please \
      seek the guidance of a tax representative. Community for Global \
      Innovation is not liable for the payment of any tax or any other \
      obligations you may incur as a result of accepting a scholarship from us.\
      <br><br><br>\
      Publicity and Promotion<br><br>\
      If you are offered a scholarship, your details including name, school, \
      photograph, video and scholarship awarded may be passed on to media and \
      used by CFGI and/or partner organizations for promotional purposes, \
      including but not limited to CFGI’s website, social media channels, \
      print and electronic media. If you do not wish for your details to be \
      passed on to the media or used for promotional purposes, you must notify \
      CFGI in writing.\
      <br><br>\
      If you attend events held by CFGI, photos and videos of you at the event \
      (along with your name, school and scholarship), may be used for \
      promotional purposes by CFGI and/or our partner organizations, including \
      but not limited to CFGI website, social media channels, print and \
      electronic media.\
      <br><br>\
      It is agreed that the use of these photographs and videos shall in no \
      way be used in any other forum other than official CFGI business. The \
      scholarship recipient also waives the right to inspect or approve the \
      finished product, the advertising copy or other matter that may be used \
      in connection therewith or the use to which it may be applied. If you do \
      not wish for photographs and videos of you to be used in this way, you \
      must notify CFGI in writing.\
      <br><br><br>\
      Media Consent<br><br>\
      Consent is sought for use of photographic/video/audio recording made of \
      the student during CFGI events. Permission is being requested to publish, \
      reproduce and communicate images and/or recording of the student on:\
      <br><br>\
      This consent is for an indefinite period of time. Consent is also sought \
      to publish the name and school of the student. We may also provide the \
      media with details of your scholarship either before or after events. \
      With reference to the above, the student grants permission to use, \
      reproduce, distribute, communicate to the public, publish, publicly \
      display, modify, translate, adapt, upload, download in any form or manner \
      and/or permission to incorporate this material into other materials or works \
      in any format or medium for any non-commercial purpose and the right to \
      sublicense those rights for noncommercial purpose. The student can withdraw \
      their consent at any time but must do so in writing or by email to admin@cfgi.org.\
      <br><br><br>\
      Liability Waiver<br><br>\
      In accepting a scholarship from CFGI you agree to WAIVE, RELEASE, AND DISCHARGE \
      Community of Global Innovation, its officers, associates and partner organisations \
      from any and all liability, including but not limited to, any liability arising \
      from the negligence or fault of the entities or persons released, for death, \
      disability, personal injury, property damage, property theft, or actions of any kind \
      which may occur to you during or after the scholarship period, including during or \
      after any travel undertaken as part of the scholarship.\
      <br><br><br>\
      Keeping your contact details up to date<br><br>\
      All correspondence during the application process will be sent to the applicant\'s \
      residential address or primary email address submitted in the scholarship application form.\
      <br><br>\
      It is the responsibility of the scholarship recipient to inform CFGI of any changes to their \
      email, postal or residential address. It is also the responsibility of the scholarship \
      recipient to inform CFGI if they change their place of study, if you stop being an \
      international student, or if you become a U.S. citizen, during the course of their scholarship.\
      <br><br>\
      Please note, if you are under 18 years of age, it is understood that your parent or guardian \
      has read and agreed to the Scholarship Terms and Conditions on your behalf.\
      <br><br>\
      CFGI reserves the right to amend these Terms and Conditions for commencing and continuing \
      scholarship holders.\
      <br><br>\
      Any questions about these Terms and Conditions should be directed to admin@cfgi.world.\
      ',
      buttons: ['AGREE']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
