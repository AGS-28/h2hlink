<div style="text-align: left;">
    <table class="table dt-responsive w-100" width="100%">
        <tr style="vertical-align: top; text-align: center;">
            <td><h5><b>Input Serial Blangko Yang Akan Digunakan Pada SKA</h5></b></td>
        </tr>
        <tr style="vertical-align: top; text-align: justify;">
            <td>
                Pastikan serial blangko yang di input benar karena akan dilakukan validasi pada sistem eform. Pastikan nomor serial yang di input sesuai dengan form yang dimohonkan. Pastikan status nomor serial yang anda masukkan pada permohonan ska berlaku pada menu "Rekapitulasi Blangko" di sistem e-form (<a href="http://e-form.kemendag.go.id" target="_blank">http://e-form.kemendag.go.id</a>). Dan tipe form nya sesuai dengan SKA yang diajukan.
            </td>
        </tr>
        <tr style="vertical-align: top; text-align: justify;">
            <td>
                <b>Gunakan garis lurus ( | ) untuk input serial yang berurutan.</b><br/>
                <b>Contoh</b> : A-XYZ-0001|0020 (Untuk input seri A-XYZ-0001,A-XYZ-0002,A-XYZ-0003, dst.. s/d , A-XYZ-0020)
            </td>
        </tr>
        <tr style="vertical-align: top; text-align: justify;">
            <td>
                <b>Gunakan titik koma ( ; ) sebagai pemisah data serial.</b><br/>
                <b>Contoh</b> : A-ABC-0025;A-ABC-0100;A-XXX-0020
            </td>
        </tr>
        <tr style="vertical-align: top; text-align: justify;">
            <td>
                <b>Input kombinasi.</b><br/>
                <b>Contoh</b> : A-XYZ-0001|0020;A-ABC-0025;A-ABC-0100;A-XXX-0020;
            </td>
        </tr>
        <tr style="vertical-align: top; text-align: justify;">
            <td>
                <b>Pengajuan.</b><br/>
                <input type="radio" id="btn_radio" name="btn_radio" value="1" onchange="changeradiobtn(this);"> e-form &nbsp;&nbsp;&nbsp; 
                <input type="radio" id="btn_radio" name="btn_radio" value="0" onchange="changeradiobtn(this);"> Konvensional
            </td>
        </tr>
        <tr style="vertical-align: top; text-align: justify; display: none;" id="input_serial">
            <td>
                <b>Nomor Serial.</b><br/>
                <textarea id="no_serial" name="no_serial" style="width: 600px; height: 150px;"></textarea>
            </td>
        </tr>
    </table>
    <div class="text-end">
        <input type="hidden" class="form-control" id="pengajuan" name="pengajuan" readonly>
        <button type="button" onclick="submit_file();" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-check label-icon"></i> Submit</button>
    </div>
</div>